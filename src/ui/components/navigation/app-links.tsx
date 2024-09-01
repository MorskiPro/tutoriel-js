

interface AppLinks {
    id: number,
    label: string,
    baseUrl: string,
    type: string,
}

export const footerApplicationList: AppLinks[] = [
    {
        id: 1,
        label: "Qui sommes-nous ?",
        baseUrl: "/qui-sommes-nous",
        type: "internal",
    },
    {
        id: 2,
        label: "Nos pizzas",
        baseUrl: "/nos-pizzas",
        type: "internal",
    },
    {
        id: 3,
        label: "Nos horaires",
        baseUrl: "/nos-horaires",
        type: "internal",
    },
]
