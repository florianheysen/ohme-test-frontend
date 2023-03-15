import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
    'active:scale-95 select-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default:
                    'bg-[#096A93] text-white hover:bg-[#065273]',
                destructive: 'text-white hover:bg-red-300 focus:ring-red-300',
                outline:
                    'bg-[#096A93] text-white hover:bg-[#065273] border border-slate-200',
                subtle:
                    'bg-slate-100 text-slate-900 hover:bg-slate-200',
                ghost:
                    'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent',
                link: 'bg-transparent underline-offset-4 hover:underline text-slate-900',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-8 px-2 rounded-md',
                xs: 'h-5 px-1 rounded-md',
                lg: 'h-10 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }