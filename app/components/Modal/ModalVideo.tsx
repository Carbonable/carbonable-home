import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ModalButton } from '../Button';

export default function ModalVideo() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <ModalButton className="bg-lightblue flex items-center justify-center mx-auto" onClick={handleClick}>
        <PlayCircleIcon className="w-10 rounded-full mr-2"></PlayCircleIcon>
        Watch video
      </ModalButton>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="block min-h-screen min-w-full items-end justify-center p-1 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex flex-wrap items-start transform overflow-hidden min-h-screen rounded-lg bg-black text-left shadow-xl transition-all w-full">
                  <div className="bg-black w-full">
                    <div className="flex items-center justify-end p-4 w-full">
                      <div onClick={() => setOpen(false)}><XMarkIcon className="h-6 w-6 text-green cursor-pointer" aria-hidden="true" /></div>
                      <div onClick={() => setOpen(false)} className="uppercase text-bold font-inter text-xl text-green cursor-pointer">Close</div>
                    </div>
                  </div>
                  <div className="min-h-full w-full text-center">
                    <div className="relative w-full">
                      <iframe src="https://www.youtube.com/embed/5dZrROBmfKU?autoplay=1" className='full-screen-video' title="Carbonable" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
