import React, { forwardRef } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { CBMIcon } from "../../Atoms/Icon"

import { Upload } from "antd"

//TODO: Style component
const CBMUpload = forwardRef(
    ({ className, imageUrl, loading, onChange, ...props }, ref) => {
        const classes = classNames("cbm-upload", className)

        const formatToBase64 = evt => {
            var file = evt.target.files[0] // FileList object

            var reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = function() {
                onChange({ base64: reader.result })
            }
        }

        return (
            <input type='file' className={classes} onChange={formatToBase64} />
        )
    }
)

CBMUpload.propTypes = Object.assign(
    {
        ...Upload["propTypes"]
    },
    {
        className: PropTypes.string
    }
)

CBMUpload.defaultProps = {}

export default CBMUpload
