import { ViewIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="md" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader>
            <Flex
              fontSize="40px"
              fontFamily="Work sans"
              d="flex"
              justifyContent="center"
            >
              {user.name}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              d="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box mr={{ base: "0", md: "8" }}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={user.pic}
                  alt={user.name}
                />
              </Box>
              <Text
                fontSize={{ base: "28px", md: "30px" }}
                fontFamily="Work sans"
                whiteSpace="nowrap"
              >
                Email: {user.email}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
