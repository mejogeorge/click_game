export interface HeaderProps {
    headerItems: HeaderItem[]
}
export interface HeaderItem {
    name: string,
    path: string,
    scrollTo: (item: string) => void
}