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
        { name: 'The Haunting of Hill House', tvshow: tvshow1, showid:'Haunting-Hill-House' },
        { name: 'Death Note', tvshow: tvshow2, showid:'Death-Note' },
        { name: 'Black Mirror', tvshow: tvshow3, showid:'Black-Mirror' },
        { name: 'Game Of Thrones', tvshow: tvshow4, showid:'Game-Of-Thrones' },
        { name: 'The Wire', tvshow: tvshow5, showid:'The-Wire' },
        { name: 'The Walking Dead', tvshow: tvshow6, showid:'The-Walking-Dead' },
    ];
}

// getGallery;