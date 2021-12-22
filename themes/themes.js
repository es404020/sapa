import { extendTheme } from "@chakra-ui/react"
const colors = {brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#01048a",
    },
  }


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config,colors ,fonts: {
  // heading: "Poppins",
  // body: "Poppins",
},})

export default theme


