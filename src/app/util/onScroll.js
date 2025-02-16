export const onScroll = (ref, offset = 0) => {
	if (ref.current && window.matchMedia("(min-width: 1000px)").matches) {
		ref.current.style.backgroundPosition = `0px ${
			Math.round(window.scrollY * -0.5) - offset
		}px`;
	}
};
