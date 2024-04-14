import { RadioGroup } from '@headlessui/react';
import { ForecastType } from '~/utils/utils';
export default function Scenarios({ scenarios, scenarioIndex, setScenarioIndex }: { scenarios: string[], scenarioIndex: ForecastType, setScenarioIndex: (value: ForecastType) => void }) {
    return (
        <div className="w-full">
            <RadioGroup value={scenarioIndex} onChange={setScenarioIndex}>
            <RadioGroup.Label className="sr-only">Scenarios</RadioGroup.Label>
            <div className="space-x-2 flex flex-wrap items-center justify-start w-full mt-2">
                {scenarios.map((scenario, index) => (
                <RadioGroup.Option
                    key={scenario}
                    value={index}
                    className={({ checked }) =>
                    `
                    ${
                        checked ? 'text-neutral-100 border-neutral-100 bg-opacityLight-5' : 'bg-transparent text-neutral-400 border-neutral-400'
                    }
                        relative flex cursor-pointer rounded-full shadow-md border focus:outline-none uppercase text-sm`
                    }
                >
                    {({ checked }) => (
                    <>
                        <div className="flex w-full items-center px-2 py-1">
                            <div className="px-2">
                                <div className="text-sm">
                                    <RadioGroup.Label
                                        as="p"
                                        className={` ${
                                        checked ? 'text-neutral-100' : ' text-neutral-400'
                                        }`}
                                    >
                                        {scenario}
                                    </RadioGroup.Label>
                                </div>
                            </div>
                        </div>
                    </>
                    )}
                </RadioGroup.Option>
                ))}
            </div>
            </RadioGroup>
        </div>
    )
}