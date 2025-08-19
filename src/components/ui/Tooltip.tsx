import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import Typography from './Typography';

const tooltip = cva(
  [
    // Base styles
    'z-1000 overflow-hidden rounded-lg p-2 max-w-40',
    'flex flex-col gap-2',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
    'bg--white',
    'shadow-lg shadow-gray-10/20',
  ]
);

export interface TooltipProps extends VariantProps<typeof tooltip> {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  className?: string;
  disabled?: boolean;
  title?: string;
  descriptionGray?: string;
  descriptionBlack?: string;
}

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  descriptionGray,
  descriptionBlack,
  side = 'top',
  align = 'center',
  delayDuration = 400,
  className,
  disabled = false,
  ...props
}) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          className={clsx(tooltip(), className)}
          sideOffset={4}
          {...props}
        >
          {title && (
            <Typography size="body" color="slate10" weight="semibold" as="h6">
              {title}
            </Typography>
          )}
          {descriptionGray && (
            <Typography size="bodyS" color="gray07">
              {descriptionGray}
            </Typography>
          )}
          {descriptionBlack && (
           <Typography size="bodyS" color="gray10">
              {descriptionBlack}
            </Typography>
          )}
          <TooltipPrimitive.Arrow 
            className="fill-[var(--color-gray-10)]" 
            width={11} 
            height={5} 
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

// Convenience wrapper that includes the TooltipProvider
export const TooltipWrapper: React.FC<TooltipProps> = (props) => {
  return (
    <TooltipProvider>
      <Tooltip {...props} />
    </TooltipProvider>
  );
};

export default Tooltip;
