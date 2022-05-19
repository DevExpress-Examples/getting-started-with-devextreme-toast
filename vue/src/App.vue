<template>
    <div id="container">
        <div id="buttons">
            <dxButton
                text="Show message"
                @click="showMessage"
            >
            </dxButton>
            <dxButton
                text="Show custom message"
                @click="showCustomMessage"
            >
            </dxButton>
        </div>
        <dxToast
            v-model:visible="isVisible"
            content-template="custom-template"
            :width="230"
            :height="50"
            type="custom"    
        >   
            <DxPosition
                my="bottom"
                at="bottom"
                of="#container"
            />
            <template #custom-template>
                <span>You have a new message &nbsp;</span>
                <i class='dx-icon-email icon-style'></i>
            </template>
        </dxToast>
    </div>
</template>

<script>
    import { DxButton } from 'devextreme-vue/button';
    import { DxToast, DxPosition } from 'devextreme-vue/toast';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxButton,
            DxToast,
            DxPosition
        },
        data() {
            return {
                types: ['error', 'info', 'success', 'warning'],
                isVisible: false
            };
        },
        methods: {    
            showMessage() {
                notify(
                    {
                        message: "You have a new message", 
                        width: 230,
                        position: {
                            at: "bottom",
                            my: "bottom",
                            of: "#container"
                        }
                    }, 
                    this.types[Math.floor(Math.random() * 4)], 
                    500
                );
            },
            showCustomMessage() {
                this.isVisible = true;
            }
        }
    }
</script>

<style>
    #container {
        width: 300px;
        height: 120px;
        margin: 5px;
    }

    #buttons {
        display: flex;
    }

    .dx-toast-custom {
        background-color: #F05B41;
        color: white;
        border-radius: 5px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-style {
        margin-top: 3px;
    }
</style>