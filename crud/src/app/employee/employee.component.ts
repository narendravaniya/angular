import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { Http } from '@angular/http';
import { PostModel } from '../shared/models/employee/post.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  post = new PostModel();
  posts: any;
  btntitle: string;
  activeid = -1;
  constructor(private http: Http,private empservice: EmployeeService) { }

  ngOnInit() {
    this.btntitle = "submit"
   this.getPost();
  }
  /* Post Data */
  addPost() {
    if(this.activeid == -1){
    this.empservice.sendPostData(this.post).subscribe(data => {
      alert(JSON.stringify(data))
    });
  } else {
    this.empservice.updateData(this.activeid,this.post).subscribe(data => {
      alert(JSON.stringify(data))
    }); 
  }
  }
  /* Get Data  */
  getPost() {
    this.empservice.getPostData().subscribe(data => {
      this.posts = data;
    });
  }
  
/* Delete Data */
deleteData(postid){
  this.empservice.deletePostData(postid).subscribe(data => {
    alert(JSON.stringify(data))
  });
}

/* Edit Data */
editData(pids){
  this.activeid = pids;
  this.btntitle = "Update"
  this.empservice.editPostData(pids).subscribe(data => {
  this.post = data;    
  });
}

}
