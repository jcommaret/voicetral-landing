export interface NavLink {
  text: string
  path: string
}

export interface NavLogo {
  text: string
  path: string
  img: string
}

export interface NavData {
  logo: NavLogo
  links: NavLink[]
}
