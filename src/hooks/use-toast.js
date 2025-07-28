import React from 'react';

// Toast state management
const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

// Reducer for toast state
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
};

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

// Toast types
export const toast = ({ ...props }) => {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};

// Utility functions for different toast types
toast.success = (message, options = {}) => {
  return toast({
    variant: 'success',
    title: 'Success',
    description: message,
    duration: 5000,
    ...options,
  });
};

toast.error = (message, options = {}) => {
  return toast({
    variant: 'destructive',
    title: 'Error',
    description: message,
    duration: 5000,
    ...options,
  });
};

toast.warning = (message, options = {}) => {
  return toast({
    variant: 'warning',
    title: 'Warning',
    description: message,
    duration: 5000,
    ...options,
  });
};

toast.info = (message, options = {}) => {
  return toast({
    variant: 'default',
    title: 'Info',
    description: message,
    duration: 5000,
    ...options,
  });
};

toast.promise = (promise, { loading, success, error }) => {
  const toastId = toast({
    variant: 'default',
    title: loading?.title || 'Loading...',
    description: loading?.description,
    duration: Infinity,
  });

  promise
    .then((data) => {
      toastId.update({
        variant: 'success',
        title: success?.title || 'Success',
        description: typeof success === 'function' ? success(data) : success?.description,
        duration: 5000,
      });
    })
    .catch((error) => {
      toastId.update({
        variant: 'destructive',
        title: error?.title || 'Error',
        description: typeof error === 'function' ? error(error) : error?.description,
        duration: 5000,
      });
    });

  return toastId;
};

// Main hook
export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
}