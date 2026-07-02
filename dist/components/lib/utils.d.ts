import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare function formatCurrency(amount: number, currency?: string, options?: Omit<Intl.NumberFormatOptions, "style" | "currency">): string;
export declare function generateUniqueId(prefix?: string): string;
export declare function truncateText(text: string, maxLength: number): string;
export declare function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string;
export declare function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void;
export declare function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void;
//# sourceMappingURL=utils.d.ts.map