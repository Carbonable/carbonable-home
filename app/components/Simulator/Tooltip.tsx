import { InformationCircleIcon } from '@heroicons/react/24/outline';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function TooltipInfo({text}: {text: React.ReactNode}) {
    return(
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <InformationCircleIcon className="w-6 ml-2" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content sideOffset={5} className="bg-neutral-700/90 border border-neutral-500 p-4 z-50 rounded-xl max-w-sm text-sm font-light text-neutral-100">
                        {text}
                        <Tooltip.Arrow className='fill-neutral-500' />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}