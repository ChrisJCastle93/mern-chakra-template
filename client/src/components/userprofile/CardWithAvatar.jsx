import { Avatar, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const CardWithAvatar = (props) => {
  const { action, avatarProps, children, ...rest } = props
  return (
    <Flex
      position="relative"
      direction="column"
      align={{
        base: 'center',
      }}
      maxW="2xl"
      mx="auto"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={{
        sm: 'base',
      }}
      rounded={{
        sm: 'lg',
      }}
      px={{
        base: '6',
        md: '8',
      }}
      pb={{
        base: '6',
        md: '8',
      }}
      {...rest}
    >
      <Avatar
        mt="-10"
        borderWidth="6px"
        borderColor={useColorModeValue('white', 'gray.700')}
        size="xl"
        {...avatarProps}
      />
      <Box
        position="absolute"
        top="4"
        insetEnd={{
          base: '6',
          md: '8',
        }}
      >
        {action}
      </Box>
      {children}
    </Flex>
  )
}
