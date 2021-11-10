import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface Props {
  close: any;
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
  size?: string;
  scrollBehavior?: 'inside' | 'outside';
}

export default function HeaderModal({
  close: onClose,
  isOpen,
  children,
  title,
  size,
  scrollBehavior,
}: Props) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={size}
      scrollBehavior={scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent mx={2} background='var(--darker)'>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
