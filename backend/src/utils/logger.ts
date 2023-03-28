import swal from 'sweetalert';

export const logInfo = (message: string) => {
    swal(`Good job!", "You clicked the button! ${message}`, "info");
}

export const logSuccess = (message: string) => {
    swal(`Good job!", "You clicked the button! ${message}`, "success");
}

export const logError = (message: string) => {
    swal(`Error!", "You clicked the button! ${message}`, "error");
}
