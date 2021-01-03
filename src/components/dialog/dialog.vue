<template>
    <div class="dialog">
        <!-- Modal -->
        <div class="modal fade" :id="'myModal' + modalId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="vertical-alignment-helper">
                <div class="modal-dialog vertical-align-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Filme: {{title + ' ' + 'Ano: ' + year}}</h4>
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        </div>
                        <div class="modal-body">
                            <img v-bind:src=path alt="movie">
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Play</button>
                            <button type="button" class="btn btn-primary">Stop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  import './dialog.scss'
  export default {
    name: 'dialog',
    props:{
        title: String,
        year: String,
        path: String,
        modalId: String
    },
    mounted() {
      
    }
  }
</script>