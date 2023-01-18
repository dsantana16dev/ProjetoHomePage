const _gallery = [
	{
		img: "assets/photo_0.jpg",
		description: "0"
	},
	{
		img: "assets/photo_1.jpg",
		description: "1"
	},
	{
		img: "assets/photo_2.jpg",
		description: "2"
	},
	{
		img: "assets/photo_3.jpg",
		description: "3"
	},
	{
		img: "assets/photo_4.jpg",
		description: "4"
	},
	{
		img: "assets/photo_5.jpg",
		description: "5"
	},
	{
		img: "assets/photo_6.jpg",
		description: "6"
	},
	{
		img: "assets/photo_7.jpg",
		description: "7"
	},
	{
		img: "assets/photo_8.jpg",
		description: "8"
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),

	galleryItems: document.querySelectorAll(".galeria-item"),
	sliderThumbsImage: document.querySelectorAll(".slider-thumbs__img"),
	closeModalBtn: document.querySelector(".modal__close"),
	modal: document.querySelector(".modal"),

	slider: document.querySelector(".slider"),
	sliderImage: document.querySelector(".slider-image__img"),
	sliderImageNumber: document.querySelector(".slider-image__number"),
	sliderImageDescription: document.querySelector(".slider-image-description"),
	sliderPrevButton: document.querySelector(".slider-buttons__btn-prev"),
	sliderNextButton: document.querySelector(".slider-buttons__btn-next"),
}

let _sliderCounter = 0, _touchStart, _touchEnd;

_elements.date.innerHTML = new Date().getFullYear() + ".";

_elements.scrollLinks.forEach(link => {
	link.addEventListener("click", e =>{
		_elements.navbarList.classList.remove("navbar-list--show-links")

		const id = link.getAttribute("href");
		const element = document.querySelector(id);
		
		
		const position = element.offsetTop - 60;
		
		
		window.scrollTo({
			top:position,
			behavior: "smooth"
		});

		e.preventDefault();
	});
});

_elements.toggle.addEventListener("click", () => {
	_elements.navbarList.classList.toggle("navbar-list--show-links")

});

_elements.galleryItems.forEach(item => {
	item.addEventListener("click", e => {
		const id = getImageId(e.target);
		updateModal(id);
		_elements.modal.style.display = "flex";
	});
});

_elements.sliderThumbsImage.forEach(img => {

});

_elements.closeModalBtn.addEventListener("click", () => {
	_elements.modal.style.display = "none";
});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {
	const arrFromChildren = Arry.from(target.parentNode.children);
	const id = arrFromChildren.indexOf(target);
	return id
}

const updateModal = (imgId) => {
	_elements.sliderImage.src = _gallery[imgId].img
}

const nextImage = () => {

}

const prevImage = () => {

}

/**************************************************************************/
/* As linhas de código abaixo correspondem a um capítulo e um vídeo bônus 
/* desse projeto. Neste capítulo/vídeo é ensinado como fazer o slider alterar
/* a imagem apenas arrastando o dedo na tela. 
/*
/* Caso deseje adquirir essa parte do projeto acompanhado do código fonte 
/* completo + código fonte comentado + layout do projeto no Figma, 
/* acesse o link abaixo:
/*
/* https://inkasadev.alumy.com
/**************************************************************************/

_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});
