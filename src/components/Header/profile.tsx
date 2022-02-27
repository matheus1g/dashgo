import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Gomes</Text>
          <Text color="gray.300" fontSize="small">
            matheus.tosta@tereos.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Gomes" src="" />
    </Flex>
  )
}