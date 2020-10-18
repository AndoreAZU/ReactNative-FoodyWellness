const Makanan = {
    id_makanan: "",
	nama_makanan: "",
	deskripsi_makanan: "",
	jam_makanan: "",
	harga_makanan: "",
	foto_makanan: "",
	image_makanan: "",
}

class MakananPagi {
    id_makanan;
	nama_makanan;
	deskripsi_makanan;
	jam_makanan;
	harga_makanan;
	foto_makanan;
	image_makanan;

    constructor(makanan){
        this.Makanan = makanan;
    }
}

export {MakananPagi};