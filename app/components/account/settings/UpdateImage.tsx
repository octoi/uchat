/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Center, Image, useDisclosure, Button } from '@chakra-ui/react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import HeaderModal from '@/components/shared/header/HeaderModal';
import Input from '../Input';

interface Props {
  src: string;
  alt: string;
  setImage: Dispatch<SetStateAction<string>>;
}

export default function UpdateImage({ src, alt, setImage }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageInputValue, setImageInputValue] = useState(src);
  const [imageURL, setImageURL] = useState(src);

  useEffect(() => {
    setImageURL(imageInputValue);
  }, [imageInputValue]);

  return (
    <div className='relative cursor-pointer' onClick={onOpen}>
      <Image src={src} alt={alt} width='100%' height={200} fit='cover' />
      <div className='absolute right-2 bottom-2 bg-app-purpleLight p-2 rounded-full text-xl'>
        <MdOutlineModeEditOutline />
      </div>

      <HeaderModal title='Update Image' isOpen={isOpen} close={onClose}>
        <Center>
          <img
            src={imageURL}
            alt={alt}
            className='rounded-full w-52 h-52 object-cover'
            onError={() => setImageURL(src)}
          />
        </Center>
        <Input
          placeholder='Direct Image URL'
          state={imageInputValue}
          setState={setImageInputValue}
        />
        <Button
          size='md'
          width='100%'
          background='var(--dark)'
          mt={3}
          py={7}
          onClick={() => {
            setImage(imageURL);
            onClose();
          }}
          backgroundColor='var(--purple-light)'
          _hover={{ background: 'var(--purple)' }}
        >
          <AiOutlineCheck size='22' strokeWidth={20} />
        </Button>
      </HeaderModal>
    </div>
  );
}
