import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL:string= "https://user-server-w3tn.onrender.com"
  constructor(private http:HttpClient) {}
  getEmployeeApi(){
    return this.http.get(`${this.serverURL}/employee`)
  }
  getSingleEmployeeApi(id:string){
    return this.http.get(`${this.serverURL}/employee/${id}`)
  }
  addEmployeeApi(reqbody:any){
    return this.http.post(`${this.serverURL}/employee`,reqbody)
  }
  updateEmployeeApi(reqbody:any,id:string){
    return this.http.put(`${this.serverURL}/employee/${id}`,reqbody)
  }
  deleteEmployeeApi(id:string){
    return this.http.delete(`${this.serverURL}/employee/${id}`)
  }
}
