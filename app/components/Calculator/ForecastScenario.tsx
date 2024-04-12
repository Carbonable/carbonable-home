import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ForecastType } from '~/utils/utils';

export default function ForecastScenario({selectedForecastType, setSelectedForecastType}: {selectedForecastType: ForecastType, setSelectedForecastType: (forecastType: ForecastType) => void}) {
    const toggleGroupItemClasses = 'hover:bg-neutral-700/50 data-[state=on]:bg-neutral-600/70 px-4 py-2 first:rounded-l-xl last:rounded-r-xl';

    return (
        <>
        <ToggleGroup.Root
            className="inline-flex rounded-xl border border-neutral-600"
            type="single"
            defaultValue={ForecastType.BASE.toString()}
            value={selectedForecastType.toString()}
            onValueChange={(value) => {
            if (value) setSelectedForecastType(parseInt(value) as ForecastType);
            }}
        >
            <ToggleGroup.Item value={ForecastType.WORST.toString()} className={toggleGroupItemClasses}>
                Min
            </ToggleGroup.Item>
            <ToggleGroup.Item value={ForecastType.BASE.toString()} className={toggleGroupItemClasses}>
                Medium
            </ToggleGroup.Item>
            <ToggleGroup.Item value={ForecastType.BEST.toString()} className={toggleGroupItemClasses}>
                Max
            </ToggleGroup.Item>
        </ToggleGroup.Root>
        </>
    )
}