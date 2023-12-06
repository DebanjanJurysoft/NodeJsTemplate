const Joi = require('joi')

const telyport_get_orders_query = Joi.object({
    order_id: Joi.string().required()
})

const telyport_create_orders_payload = Joi.object({
    businessOrderID: Joi.string().required(),
    orderType: Joi.string().required().default('SEND').valid('SEND', 'RECEIVE'),
    pack: Joi.object({
        type: Joi.string().required().default('small')
    }),
    dropAddress: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required(),
    }),
    pickAddress: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required()
    }),
    receiver: Joi.object({
        mobileNumber: Joi.string().required(),
        name: Joi.string().required()
    }),
    sender: Joi.object({
        mobileNumber: Joi.string().required(),
        name: Joi.string().required()
    }),
    shipType: Joi.string().required().valid("RUSH", "XPRESS", "SAMEDAY", "STANDARD", "SAMEDAY_ENTERPRISE", "STANDARD_ENTERPRISE", "RUSH_ENTERPRISE", "XPRESS_ENTERPRISE"),
    walletType: Joi.string().required().valid("business", "user")
})

const fetchShippingChargesPayload = Joi.object({
    drop: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required()
    })
})

const fetchLatLngForAddressPayload = Joi.object({
    address: Joi.string().required()
})



module.exports = {
    telyport_get_orders_query,
    telyport_create_orders_payload,
    fetchShippingChargesPayload,
    fetchLatLngForAddressPayload
}