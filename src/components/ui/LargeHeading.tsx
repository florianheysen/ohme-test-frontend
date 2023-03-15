import { FC } from 'react'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const headingVariants = cva(
    'text-black text-center text-left font-extrabold leading-tight tracking-tighter',
    {
        variants: {
            size: {
                default: 'text-6xl',
                lg: 'text-7xl',
                sm: 'text-4xl',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
)

interface LargeHeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> { }

const LargeHeading: FC<LargeHeadingProps> = ({
    children,
    className,
    size,
    ...props
}) => {
    return (
        <h1 {...props} className={cn(headingVariants({ size, className }))}>
            {children}
        </h1>
    )
}

export default LargeHeading