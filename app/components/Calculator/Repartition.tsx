import * as Slider from '@radix-ui/react-slider';

export default function Repartition({value, setValue}: {value: number[], setValue: (val: number[]) => void}) {

    return (
        <div>
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                defaultValue={[50]}
                max={100}
                step={1}
                value={value}
                onValueChange={(val) => setValue(val)}
                >
                <Slider.Track className="bg-blue relative grow rounded-full h-[10px]">
                    <Slider.Range className="absolute bg-greenish-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-neutral-100 shadow-[0_2px_10px] shadow-neutral-800 rounded-[10px] hover:bg-neutral-50 hover:shadow-neutral-100 focus:outline-none cursor-pointer"
                    aria-label="Volume"
                />
            </Slider.Root>
        </div>
    )
}