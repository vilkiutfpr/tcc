export const configureColorFromPriority = priority =>
    priority === "HIGH"
        ? "danger"
        : priority === "MEDIUM"
        ? "warning"
        : "success"
