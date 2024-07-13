<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class CrudAppController extends Controller
{
    public function index(){
        return User::orderBy('created_at', 'desc')->paginate(5);
    }
    public function destroy($id){
       
        $user=User::findOrFail($id);
        
        if($user->delete()){
            return response()->json(['msg'=>'User Delete Successfully!!!']);
        }


    }
    public function updateUser(Request $request){
        $request->validate([
            'user_id'=>'required',
            'username'=>'required',
            'email'=>'required',
            'password'=>'required',
        ]);
       
        
        $user=User::findOrFail($request->input('user_id'));
        if($user){
            $user->name=$request->input('username');
            $user->email=$request->input('email');
            $user->password=$request->input('password');
            if($user->save()){
                return response()->json(['msg'=>'User Updated Successfully!!!']);
            }
        }
        


    }
    public function show($id){
       
        return User::findOrFail($id);
        


    }
    public function store(Request $request){
        $request->validate([
            'username'=>'required',
            'email'=>'required | email',
            'password'=>'required | min:5',
        ]);
       
        $user=new User;
        $user->name=$request->input('username');
        $user->email=$request->input('email');
        $user->password=$request->input('password');
        
        if($user->save()){
            return response()->json(['msg'=>'User Created Successfully!!!']);
        }


    }
}
