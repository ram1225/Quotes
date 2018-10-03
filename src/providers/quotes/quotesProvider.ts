
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {
  items: Observable<any[]>;
  categoryName: string;
  itemRef: AngularFireList<any>;
  constructor(public http: HttpClient, private db: AngularFireDatabase) {
    console.log('Hello QuotesProvider Provider');

  }


  getData(categoryName: string): Observable<any> {
    this.categoryName = categoryName;
    this.itemRef = this.db.list(categoryName);
    return this.itemRef.valueChanges();

  }

  /* Update quote from the database */
  updateQuote(key: string, quoteObj: string): Promise<any> {
    return new Promise<any>((resolve, reject)=>{
      this.itemRef.update(key+"", { quote: quoteObj['quote'], author: quoteObj['author'], favorite: true  }).then((response)=>{
        resolve(response);
      })
      .catch((error)=>{
        reject(error);
      });
     
    });
   
  }
}
