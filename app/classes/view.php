<?php
/* 
 * Project: Nathan MVC
 * File: /classes/view.php
 * Purpose: class for the view object.
 * Author: Nathan Davison
 */

class View {    
    
    protected $viewFile;
    
    //establish view location on object creation
    public function __construct($controllerClass, $action) {
        $controllerName = str_replace("Controller", "", $controllerClass);
        $this->viewFile = $_SERVER['DOCUMENT_ROOT']."/app/views/" . $controllerName . "/" . $action . ".php";
    }
               
    //output the view
    public function output($viewModel, $template = "basetemplate") {
        
        $templateFile = $_SERVER['DOCUMENT_ROOT']."/app/views/templates/".$template.".php";
        
        if (file_exists($this->viewFile)) {
            if ($template) {
                //include the full template
                if (file_exists($templateFile)) {
                    require($templateFile);
                } else {
                    require($_SERVER['DOCUMENT_ROOT']."/app/views/error/badtemplate.php");
                }
            } else {
                //we're not using a template view so just output the method's view directly
                require($this->viewFile);
            }
        } else {
            require($_SERVER['DOCUMENT_ROOT']."/app/views/error/badview.php");
        }
        
    }
}

?>