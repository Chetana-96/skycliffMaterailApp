import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-displaydemo',
  templateUrl: './displaydemo.component.html',
  styleUrls: ['./displaydemo.component.css']
})
export class DisplaydemoComponent implements OnInit {

displayedColumns: string[] = ['user_email', 'user_name', 'user_password', 'user_mobile_no'];
dataSource :  MatTableDataSource<User>;
selection = new SelectionModel<User>(true, []);
// dataSource:User[]=[];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        // this. dataSource = new MatTableDataSource(data);
        this.dataSource = new  MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_email + 1}`;
  }


}
