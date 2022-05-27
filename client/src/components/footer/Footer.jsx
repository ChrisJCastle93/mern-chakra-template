import { ButtonGroup, Container, IconButton, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

export const Footer = () => (
  <Container
    maxW="8xl"
    as="footer"
    role="contentinfo"
    py={{
      base: "6",
      md: "8",
    }}
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton as="a" href="#" color="teal" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
          <IconButton as="a" href="#" color="teal" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton as="a" href="#" color="teal" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
      {/* <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text> */}
    </Stack>
  </Container>
);
