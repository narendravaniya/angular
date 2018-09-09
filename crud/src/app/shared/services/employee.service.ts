import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  
  url = environment.baseUrl;
  constructor(private http: Http) { }
  /* get method */

  getPostData() {
    
    return this.http.get(this.url + "/" + "posts")
    
      .map(response => response.json())
      
  }
  /* Post method */
  sendPostData(post){
    return this.http.post(this.url + "/" + "posts",post)
    
      .map(response => response.json())
  }
  /* Delete method */
  deletePostData(postid){
    return this.http.delete(this.url + "/" + "posts" + "/" + postid)
    
      .map(response => response.json())
  }

  /* Edit method */
  editPostData(pid){
    return this.http.get(this.url + "/" + "posts" + "/" + pid)
    
      .map(response => response.json())
  }

   /* Upadte method */
   updateData(post,pid){
    return this.http.patch(this.url + "/" + "posts" + "/" + pid,post)
    
      .map(response => response.json())
  }
}
