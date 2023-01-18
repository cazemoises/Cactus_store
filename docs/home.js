const displayFilterTags = () => {
    
    const filter = document.querySelector('.filter-tags');
    const selectedTags = document.querySelectorAll('.filter select option:checked');

    filter.innerHTML = '';
    
    selectedTags.forEach((item) => {

        if (item.value) {
            filter.innerHTML += `            
            <button id=${item.value} onclick="deleteFilterTag(this.id)" class="flex">
                <p>${item.value}</p>
                <span>&times;</span>
            </button>`
        }

    });

    
}

const deleteFilterTag = (id) => {

    const tag = document.querySelector(`#${id}`);
    const selectedTags = document.querySelectorAll('.filter select option:checked');

    selectedTags.forEach((item) => {
        console.log(item.value)
    })

    return tag.remove();

}

const openFilterSection = () => {

    const filterDiv = document.querySelector('.filter');
    const closedFilter = document.querySelector('.closed-filter');
    closedFilter.style.display = 'none';
    filterDiv.style.display = 'flex';

}

const closeFilterSection = () => {

    const filterDiv = document.querySelector('.filter')
    const closedFilter = document.querySelector('.closed-filter');
    filterDiv.style.display = 'none';
    closedFilter.style.display = 'flex'

}