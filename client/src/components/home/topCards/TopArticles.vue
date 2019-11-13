<!--Child componenet of Home.vue-->
<template>
    <div>
        <b-container class="my-5">
        <FrontCards title="Newest Food Trucks this month" image="https://images.unsplash.com/photo-1505496704829-37e28089504e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula purus non ultrices blandit."></FrontCards>
        <FrontCards title="Top Picks" image="https://images.unsplash.com/photo-1559249849-58451f22f489?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula purus non ultrices blandit."></FrontCards>
        <FrontCards title="Satisfy your icecream needs" image="https://images.unsplash.com/photo-1499287846893-3836a8142739?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet lorem vitae sem sollicitudin posuere vel ac arcu. Sed vitae nisl mauris. Nulla dictum purus sed libero molestie aliquet. Sed facilisis mauris id leo finibus egestas. Praesent vel nunc massa."></FrontCards>
        </b-container>
    </div>
</template>

<script>
import FrontCards from './FrontCards'
export default {
    name:'topArticles',
    components:{FrontCards:FrontCards}
}
</script>