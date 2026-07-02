"use strict";
// @ts-nocheck
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = useToast;
exports.toast = toast;
const React = __importStar(require("react"));
// Action types for reducer
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
};
// Configuration constants
const TOAST_LIMIT = 20;
const TOAST_REMOVE_DELAY = 1000;
// ID generation for toasts
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
// Track toast timeouts
const toastTimeouts = new Map();
// Reducer for toast state management
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TOAST:
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };
        case actionTypes.UPDATE_TOAST:
            return {
                ...state,
                toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t),
            };
        case actionTypes.DISMISS_TOAST: {
            const { toastId } = action;
            if (toastId === undefined) {
                return {
                    ...state,
                    toasts: state.toasts.map((t) => ({
                        ...t,
                        open: false,
                    })),
                };
            }
            return {
                ...state,
                toasts: state.toasts.map((t) => t.id === toastId ? { ...t, open: false } : t),
            };
        }
        case actionTypes.REMOVE_TOAST: {
            const { toastId } = action;
            if (toastId === undefined) {
                return {
                    ...state,
                    toasts: [],
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== toastId),
            };
        }
    }
};
// Memory state and listeners
const listeners = [];
let memoryState = { toasts: [] };
// Dispatch function to update state and notify listeners
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
        listener(memoryState);
    });
}
function toast(props) {
    const id = genId();
    // Auto-dismiss after duration
    if (props.duration !== Infinity) {
        const timeout = setTimeout(() => {
            dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
            // Remove after animation completes
            setTimeout(() => {
                dispatch({ type: actionTypes.REMOVE_TOAST, toastId: id });
            }, TOAST_REMOVE_DELAY);
            toastTimeouts.delete(id);
        }, props.duration || 5000);
        toastTimeouts.set(id, timeout);
    }
    // Methods for the toast
    const update = (props) => {
        dispatch({
            type: actionTypes.UPDATE_TOAST,
            toast: { ...props, id },
        });
        return id;
    };
    const dismiss = () => {
        dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
        // Clear any existing timeout
        const timeout = toastTimeouts.get(id);
        if (timeout) {
            clearTimeout(timeout);
            toastTimeouts.delete(id);
        }
        // Remove after animation completes
        setTimeout(() => {
            dispatch({ type: actionTypes.REMOVE_TOAST, toastId: id });
        }, TOAST_REMOVE_DELAY);
    };
    // Add the toast to state
    dispatch({
        type: actionTypes.ADD_TOAST,
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open) => {
                if (!open)
                    dismiss();
                props.onOpenChange?.(open);
            },
        },
    });
    return {
        id,
        dismiss,
        update,
    };
}
// Convenience functions for different toast types
toast.default = (props) => toast({ ...props, type: "default" });
toast.destructive = (props) => toast({ ...props, type: "destructive" });
toast.success = (props) => toast({ ...props, type: "success", variant: "success" });
toast.warning = (props) => toast({ ...props, type: "warning" });
toast.info = (props) => toast({ ...props, type: "info" });
// Hook for consuming toasts
function useToast() {
    const [state, setState] = React.useState(memoryState);
    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);
    return {
        ...state,
        toast,
        dismiss: (toastId) => {
            dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
            if (toastId) {
                const timeout = toastTimeouts.get(toastId);
                if (timeout) {
                    clearTimeout(timeout);
                    toastTimeouts.delete(toastId);
                }
                setTimeout(() => {
                    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
                }, TOAST_REMOVE_DELAY);
            }
        },
    };
}
//# sourceMappingURL=use-toast.js.map