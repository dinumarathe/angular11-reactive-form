import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { MaterialModule } from "./material.module";


@NgModule({
    declarations: [ LoaderComponent ],
    imports: [MaterialModule],
    exports: [LoaderComponent, MaterialModule],
    providers: [],
})

export class SharedModule {}