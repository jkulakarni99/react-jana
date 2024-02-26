# React Learning 

# Parcel is basically bundler
- Dev build
- Local server
- HMR = Hot module replacement (save new changes automatically reload page this is HMR)
- File watching alogrithm which is in C++ 
- Faster devlopement builds due to caching  
- Image optimization
- Minification (Bundle of our files, bsadically it is BUNDLER)
- Compressing 
- Consistant Hashing
- Code splitting 
- Differential Bundling (App hosted then app can be opened in all browseres here parcel take care of old browsers)
- Diagnostic
- Error Handling 
- way to host in HTTPs
- Tree shaking - remove unused code 
- Different dev and prod bundler  



# React Hooks
React will make DOM operation super fast, when state var changes the DOM will re-render immediately. It is good at DOM manipulation

State variable, state means keyword 
If we declare state varibale in one component then it related to that component only as simple as local scope to that particulat react component 

Hooks are Normal JS utility function
2 imp hook,
-useState()
  -- const [listOfRes, setListOfRes] = useState(resList); 
     OR
     arr = useState9resList;
     with arr we can do listOfRes = arr[0] then setListOfRes = arr[1]
     OR
     const [lisrOfArr, setListOfArr] = arr;
    it's all about simple array destricturing, basically useState() return arr 
  
-useEffect()

whenever state variable changes react re-render the DOM

Virtual DOM: It is representaion of Actual DOM and Actual DOM is nothing but all tags exmaple div, div inside div and imag tag etc etc
Also Virtual DOM is like JS representation of HTML as same as JSX => React.createELement => React Element => finall JS object 

Reconciliation ALgorithm (React Fiber): It consist of Virtual DOM, Diff Algorth. It came in React 16.

Diff Algorith: It tries to find the different between old virtual dom and new virtual dom and then it actually updates the DOM on every render cycle

React is efficiant DOM manipulator bcz it has virtual DOM and used Diff Algorithm



# Routing
Client Side Routing (Page navigation will be done before doing api call and then call on page load ) & Server Side Routing (Example: anchor tag call to api get the data then show it in the UI )


# class based
1st constryctor will be called then render method then componentDidMount called this is lifecycle hook of class based
2 phase RENDER PHASE and COMMIT PHASE
1st react will btach the render phase and then move to COMMIT Phase 