import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { IMetaTag } from "@data/mocks/meta.interface";

@Injectable({
    providedIn: 'root'
})
export class MetaService{
    constructor(
        private meta: Meta
    ) {}

    addMetaTag(metaData: IMetaTag){
        this.meta.addTag({ name: 'og:title', content: metaData.title });
        this.meta.addTag({ name: 'og:description', content: metaData.description });
        this.meta.addTag({ name: 'og:image', content: metaData.image});
        this.meta.addTag({ name: 'og:url', content: metaData.url});

        this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.addTag({ name: 'twitter:title', content: metaData.title });
        this.meta.addTag({ name: 'twitter:description', content: metaData.description });
        this.meta.addTag({ name: 'twitter:image', content: metaData.image });
        this.meta.addTag({ name: 'twitter:url', content: metaData.url });
    }

}