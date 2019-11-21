export const configureNameFromPriority = status =>
    status === "HIGH" ? "Alta" : status === "MEDIUM" ? "Média" : "Baixa"
