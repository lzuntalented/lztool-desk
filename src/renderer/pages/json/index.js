import checkJsonObj from './node';

export default {
  name: 'json-page',
  data () {
    return {
      jsonSource: { a: 1 },
      rawHtml: '',
      jsonOrigin: ''
    }
  },
  methods: {
    onChangeData: function (data) {
      console.log(JSON.stringify(data))
    },
    dataChange(e){
        if(this.jsonOrigin.trim() === '') {
            this.rawHtml = '';
            return
        };
        try{
            const json = JSON.parse(this.jsonOrigin);
            const a = checkJsonObj(json);
            this.rawHtml = a.html;
        }catch (e) {
            alert('json format error');
        }
        
    },
    nodeClick (e) {
        const dom = e.target;
        let clist = dom.classList.value;
        if(clist.split(' ').indexOf('expand-ctrl') > -1){
            var expand = dom.getAttribute('expand');
			if(expand == 1){
                clist = clist.replace('icon-minus', '');
                clist = clist + ' icon-plus';
                dom.setAttribute('expand',0);
                dom.setAttribute('class', clist);
                
                let next = dom.nextSibling;
                while(next){
                    if(next.tagName === 'UL'){
                        next.style.display= 'block';
                    }
                    next = next.nextSibling;
                }
			}else{
                clist = clist.replace('icon-plus', '');
                clist = clist + ' icon-minus';
                dom.setAttribute('expand',1);
                dom.setAttribute('class', clist);

                let next = dom.nextSibling;
                while(next){
                    if(next.tagName === 'UL'){
                        next.style.display= 'none';
                    }
                    next = next.nextSibling;
                }
			}
        }
    }
  },
  mounted: function () {

  },
}
