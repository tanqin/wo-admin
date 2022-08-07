declare namespace Menu {
  interface MenuOptions {
    id: string
    path: string
    title: string
    icon?: string
    isLink?: string
    close?: boolean
    children?: MenuOptions[]
    // [key: string]: any
  }
}
