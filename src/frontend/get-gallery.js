import tvshow1 from "./images/hillhouse.jpg";
import tvshow2 from "./images/deathnote.jpg";
import tvshow3 from "./images/blackmirror.jpg";
import tvshow4 from "./images/got.jpg";
import tvshow5 from "./images/thewire.jpg";
import tvshow6 from "./images/thewalkingdead.png";

// const galleryArr = [];
// export default galleryArr;

export default function getGallery() {
    return [
        { name: 'The Haunting of Hill House', tvshow: tvshow1, showid:'Haunting-Hill-House', synopsis: 'this show is scary' },
        { name: 'Death Note', tvshow: tvshow2, showid:'Death-Note', synopsis: 'this show is thrilling' },
        { name: 'Black Mirror', tvshow: tvshow3, showid:'Black-Mirror', synopsis: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },
        { name: 'Game Of Thrones', tvshow: tvshow4, showid:'Game-Of-Thrones', synopsis: 'this show is unpredictable' },
        { name: 'The Wire', tvshow: tvshow5, showid:'The-Wire', synopsis: 'this show has gangsters' },
        { name: 'The Walking Dead', tvshow: tvshow6, showid:'The-Walking-Dead', synopsis: 'this show has zombies' },
    ];
}

// getGallery;