<template>
    <div class="dialog-login hidden">
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="vertical-alignment-helper">
                <div class="modal-dialog vertical-align-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Login</h4>
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        </div>
                        <div class="modal-body">
                            <form id="form-login">
                                <div class="form-group">
                                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                    <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <button type="submit" v-on:click="execute"  class="btn btn-primary">Login</button>
                            </form>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" id="close-login-dialog" class="btn btn-default" data-dismiss="modal">Exit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  import './login_dialog.scss'
  export default {
    name: 'dialog',
    props:{
        pass: String,
        email: String,
        callback:{type: Function}
    },
    mounted() {
       
    },
    methods: {
       execute() {
        // ... do something here
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: this.email,
                pass: this.pass
            })
        };
        fetch('http://localhost:3000/auth', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }else{
                    if(data.resp){
                        if (this.callback) {
                            this.callback( this.email)
                        }
                        this.data = data.resp;
                        alert('Authenticated succefully')
                    }else{
                        alert('Password Invalid!');
                    }  
                    
                }
            })
            .catch(error => {
                this.errorMessage = error;
                console.error('There was an error!', error);
            });
        localStorage.email= this.email;
        localStorage.pass= this.pass;
        localStorage.data = this.data;
        
      }
      
    }
  }
</script>