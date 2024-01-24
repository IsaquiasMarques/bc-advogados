export function scrollToElement(elementClassName: string, marginAbove: number): void{
    let elementOffset = document.querySelector(`.${elementClassName}`) as HTMLElement;
    // window.alert(elementOffset.offsetTop - marginAbove);
    scrollTo(0, elementOffset.offsetTop - marginAbove);
}