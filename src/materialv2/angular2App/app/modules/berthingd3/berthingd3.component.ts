import { Observable } from 'rxjs/Observable';
import { Component, ViewContainerRef, OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { D3Service, D3, Selection } from 'd3-ng2-service'; // <-- import the D3 Service, the type alias for the d3 variable and the Selection interface

import { Berthingd3Service } from './berthingd3.service';
import { Berthingd3Dialog } from './berthingd3.dialog';

import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule, CalendarModule } from 'primeng/primeng';


@Component({
    templateUrl: 'berthingd3.component.html'
    , providers: [Berthingd3Service
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , CalendarModule
    ]
})
export class Berthingd3Component implements OnInit {
    dialogRef: MdDialogRef<Berthingd3Dialog>;
    lastCloseResult: any;

    //public list: any[] = [];
    //public selected: any = {};
    //public current: any = {};
    //public myfecha: any;

    private d3: D3; // <-- Define the private member which will hold the d3 reference
    private parentNativeElement: any;

    public x: any = 2100;
    public basedate: Date=new Date();

    public posicionx: any = 10;
    public posiciony: any = 10;
    public list: any[] = [{ posicionx: 10, posiciony: 10, id: 1, name: 'RIO BLANCO', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 10, posiciony: 100, id: 2, name: 'RIO MADEIRA', service:'44C 1618/1619 - W3A', etb:'Dec 13, 08:00', etd:'Dec 14, 08:00', moves:'M:1977 (D:752, L:1255, S:12)', gmph:'GMPH:25.3/27.3' }
        , { posicionx: 10, posiciony: 200, id: 3, name: 'MAERSK BULAN', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 10, posiciony: 300, id: 4, name: 'AS MARIANA', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 10, posiciony: 400, id: 5, name: 'AUTUMN E', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 200, posiciony: 10, id: 6, name: 'ALEXANDRA', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 300, posiciony: 10, id: 7, name: 'MAERSK LIMA', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 400, posiciony: 10, id: 8, name: 'GALANI', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 500, posiciony: 10, id: 9, name: 'RIO BLANCO', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }
        , { posicionx: 100, posiciony: 10, id: 10, name: 'MAERSK LOTA', service: '44C 1618/1619 - W3A', etb: 'Dec 13, 08:00', etd: 'Dec 14, 08:00', moves: 'M:1977 (D:752, L:1255, S:12)', gmph: 'GMPH:25.3/27.3'  }];
    public selected: any;


    //public menu_items: MenuItem[];
    //public show_dialog: boolean = false;

    constructor(private _Service: Berthingd3Service, private viewContainerRef: ViewContainerRef, private dialog: MdDialog, d3Service: D3Service, element: ElementRef) {
        this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
        this.parentNativeElement = element.nativeElement;
    }

    ngOnInit(): void {
        this.list.forEach(element => {
            element.etbvalue = new Date().toLocaleDateString();
            element.etb = new Date();
            element.etb.setDate(element.etb.getDate() + (Math.floor(Math.random() * 3)));
            element.etbs = element.etb.toLocaleDateString();
            //Math.floor(Math.random() * (max - min + 1)) + min
            //Math.random() < 0.5 ? -1 : 1
            //element.etb = new Date().toISOString();
            element.etdvalue = new Date().toLocaleDateString();
        });
        let d3 = this.d3; // <-- for convenience use a block scope variable
        let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

        if (this.parentNativeElement !== null) {
            d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method 
            var svgContainer = d3.select(this.parentNativeElement).append("svg").attr("width", "100%").attr("height", "100%").style("background-color", "transparent");
            console.log("test");
            //Pattern injection
            //var pattern = svgContainer.append("defs")
            //    .append("pattern")
            //    .attrs({ id: "hash4_4", width: "8", height: "8", patternUnits: "userSpaceOnUse" })
            //    .append("rect")
            //    .attrs({ width: "8", height: "8", fill: "none", stroke: "black", "stroke-width": "0.05" });
            //var pattern = svgContainer.append("defs")
            //    .append("pattern")
            //    .attrs({ id: "hash4_4", width: "8", height: "8", patternUnits: "userSpaceOnUse" })
            //    .append("line")
            //    .attr("x1", "1")
            //    .attr("y1", "1")
            //    .attr("x2", "1")
            //    .attr("y2", "8")
            //    .attr("stroke", "black")
            //    .attr("stroke-width", "1");
            var defs = svgContainer.append("defs");
            var pattern = defs
                .append("pattern")
                .attrs({ id: "mysmallgrid", width: "8", height: "8", patternUnits: "userSpaceOnUse" })
                .append("path")
                .attr("d", "M 8 0 L 0 0 0 8")
                .attr("stroke", "gray")
                .attr("stroke-width", 0.5)
                .attr("fill", "none");
            var pattern2 = defs
                .append("pattern")
                .attrs({ id: "mygrid", width: "80", height: "80", patternUnits: "userSpaceOnUse" })
                //.append("rect")
                //.attr("width","80")
                //.attr("heigth", "80")
                //.attr("fill","url(#smallgrid)")
                //.append("path")
                //.attr("d", "M 80 0 L 0 0 0 80")
                //.attr("stroke", "gray")
                //.attr("stroke-width", 0.5)
                //.attr("fill", "url(#smallgrid)")
                ;
            pattern2.append("rect")
                .attr("width", "80")
                .attr("heigth", "80")
                .attr("fill", "url(#mysmallgrid)");

            pattern2.append("path")
                .attr("d", "M 80 0 L 0 0 0 80")
                .attr("stroke", "gray")
                .attr("stroke-width", 1)
                .attr("fill", "transparent")
                //.attr("fill", "url(#smallgrid)")
                ;

            //Shape design
            //svgContainer.append("g").attr("id", "shape")
            //    .append("rect")
            //        .attrs({ x: "0", y: "0", width: "100%", height: "100%", fill: "url(#smallgrid)" });
            svgContainer.append("rect")
                .attrs({ x: "0", y: "0", width: "100%", height: "100%", fill: "url(#mysmallgrid)" });
            svgContainer.append("rect")
                .attrs({ x: "0", y: "0", width: "100%", height: "100%", fill: "url(#mygrid)" });

            //svgContainer.append("line")
            //    .attr("x1","1")
            //    .attr("y1","1")
            //    .attr("x2","100")
            //    .attr("y2","100")
            //    .attr("stroke","black")
            //    .attr("stroke-width","1");

            var linea = d3.line().x(1).y(10);
//            svgContainer.append(linea);
            var lineData = [{ "x": 1, "y": 5 }, { "x": 20, "y": 20 },
                                 { "x": 40, "y": 10 }, { "x": 60, "y": 40 },
                                 { "x": 80, "y": 5 }, { "x": 100, "y": 60 }];
            
            //This is the accessor function we talked about above
            //var lineGraph = svgContainer.append("path").attr("d", lineFunction(lineData)).attr("stroke", "blue")
            //var lineData = [{ "x": 1, "y": 5 }, { "x": 20, "y": 20 }, { "x": 40, "y": 10 }, { "x": 60, "y": 40 }, { "x": 80, "y": 5 }, { "x": 100, "y": 60 }];

            ////This is the accessor function we talked about above
            //var lineFunction = d3..line().x(function (d) { return d.x; }).y(function (d) { return d.y; }).interpolate("linear");


            ////The SVG Container
            ////var svgContainer = d3.select("body").append("svg")
            //var svgContainer = d3.select(this.parentNativeElement).append("svg")
            //    .attr("width", 200)
            //    .attr("height", 200);

            ////The line SVG Path we draw
            //var lineGraph = svgContainer.append("path")
            //    .attr("d", lineFunction(lineData))
            //    .attr("stroke", "blue")
            //    .attr("stroke-width", 2)
            //    .attr("fill", "none");


            //// Do more D3 things 
        }

    }

    testclick(value: any) {
        this.selected = value.id;
        //window.alert(value.name);
    }

    //open_Dialog(valueRec: any) {
    //    let config = new MdDialogConfig();

    //    config.viewContainerRef = this.viewContainerRef;
    //    config.height = '80%';

    //    this.dialogRef = this.dialog.open(Berthingd3Dialog, config);
    //    this.dialogRef.componentInstance.current = JSON.parse(JSON.stringify(valueRec));

    //    this.dialogRef.afterClosed().subscribe(result => {
    //        if (result != undefined) {
    //            if (this.current.berthingd3Id != undefined) { //Edit
    //                Object.assign(valueRec, result);
    //            } else { //Add
    //                this.list.push(result);
    //            }
    //        }
    //        this.dialogRef = null;
    //    });

    //}



    //click_Add(event: any) {
    //    //this.selected = {};
    //    //this.current = {};
    //    //this.show_dialog = true;

    //    //this.dialogRef = this.dialog.open(Berthingd3Dialog);

    //    //this.dialogRef.afterClosed().subscribe(result => {
    //    //    //this.lastCloseResult = result;
    //    //    this.dialogRef = null;
    //    //}); 

    //    //let config = new MdDialogConfig();

    //    //config.viewContainerRef = this.viewContainerRef;


    //    //this.dialogRef = this.dialog.open(Berthingd3Dialog, config);
    //    //this.dialogRef.componentInstance.jazzMessage = "holaaa";
    //    //this.dialogRef.componentInstance.current = {};

    //    //this.dialogRef.afterClosed().subscribe(result => {
    //    //    this.lastCloseResult = result;
    //    //    this.dialogRef = null;
    //    //});
    //    this.current = {};
    //    this.open_Dialog(this.current);
    //}

    //click_Edit(valueRec: any) {
    //    //this.current = Object.assign({}, this.selected);
        
    //    this.current = valueRec;
    //    //this.current = JSON.parse(JSON.stringify(valueRec));
    //    this.open_Dialog(this.current);

    //    //this.show_dialog = true;
    //}

    //click_DeActivate(valueRec: any) {
    //    this._Service.deactivate(valueRec)
    //        .subscribe((status: any) => {
    //            if (status) {
    //                console.log("updated");
    //                valueRec.isActive = false;
    //            }
    //            else {
    //                console.log("update error");
    //            }
    //        });
    //}

    //click_Activate(valueRec: any) {
    //    this._Service.activate(valueRec)
    //        .subscribe((status: any) => {
    //            if (status) {
    //                console.log("updated");
    //                valueRec.isActive = true;
    //            }
    //            else {
    //                console.log("update error");
    //            }
    //        });

    //}

    //click_Delete(valueRec: any) {
    //    this._Service
    //        .delete(valueRec)
    //        .then(() => {
    //            this.list = this.list.filter(h => h.berthingd3Id !== valueRec.berthingd3Id);
    //            this.selected = {};
    //        });
    //}


    ///**primeng*/
    //onCancel(event: any) {
    //    this.show_dialog = false;
    //}

    //onRowSelect(event: any) {
    //}

    //onRowUnselect(event: any) {
    //    this.selected = {};
    //}

    //onSubmit() {
    //    if (this.selected.berthingd3Id != undefined) { //update
    //        this._Service.update(this.current)
    //            .subscribe(data => { this.show_dialog = false; this.selected = Object.assign({}, this.current); });

    //    } else { //create
    //        this._Service.create(this.current)
    //            .subscribe(data => { this.list.push(data); this.show_dialog = false; this.selected = data; });
    //    }
    //}

    //deactivate() {
    //    this._Service.deactivate(this.selected)
    //        .subscribe((status: any) => {
    //            if (status) {
    //                console.log("updated");
    //                this.selected.isActive = false;
    //            }
    //            else {
    //                console.log("update error");
    //            }
    //        });
    //}
    //activate() {
    //    this._Service.activate(this.selected)
    //        .subscribe((status: any) => {
    //            if (status) {
    //                console.log("updated");
    //                this.selected.isActive = true;
    //            }
    //            else {
    //                console.log("update error");
    //            }
    //        });
    //}

    //delete() {
    //    this._Service
    //        .delete(this.selected)
    //        .then(() => {
    //            this.list = this.list.filter(h => h.berthingd3Id !== this.selected.berthingd3Id);
    //            this.selected = {};
    //        });
    //}
}


