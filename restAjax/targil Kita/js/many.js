let tableMany = '';
document.addEventListener('event:many', (data)=>{
    
    tableMany += `
    <tr>
        <td>${data.detail.district}</td>
        <td>${data.detail.city}</td>
        <td>${data.detail.sumcandidates}</td>
        <td>${fixList(data.detail.candidates)}</td>
    </tr>
    `;
    
});
document.addEventListener('event:finished',()=>{
    $('#tableMany').append(tableMany);
})

