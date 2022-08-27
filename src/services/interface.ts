export interface ICreateUser {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface ILoginUser {
    email: string,
    password: string,
}

export interface ITech {
    title: string,
	status: "Iniciante" | "Intermediario" | "Avançado"
}

export interface IUpdateTech {
	title?: string,
	status?: "Iniciante" | "Intermediario" | "Avançado"
}

export interface IWork {
    title: string,
	description: string,
	deploy_url: string
}

export interface IUpdateWork {
	title?: string,
    description?: string
    deploy_url?:string
}

// Returns