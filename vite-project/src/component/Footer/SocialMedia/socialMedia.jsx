import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faHashtag,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem,ListIcon,OrderedList,UnorderedList,  Tooltip , Link} from '@chakra-ui/react'

function socialMedia() {
  return (
    <div>
      <UnorderedList styleType="none" display="flex" gap={4}>
        {/* Email */}
        <ListItem>
          <Tooltip label="chetancdi077@gmail.com" aria-label="Email">
            <Link href="mailto:chetancdi077@gmail.com" isExternal>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </Tooltip>
        </ListItem>

        {/* LinkedIn Profile */}
        <ListItem>
          <Tooltip label="LinkedIn Profile" aria-label="LinkedIn">
            <Link href="https://www.linkedin.com/in/chetan-chaudhari-97740021b/" isExternal>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </Tooltip>
        </ListItem>

        {/* Hashtag - Placeholder for another platform */}
        <ListItem>
          <Tooltip label="LinkedIn Profile" aria-label="LinkedIn">
            <Link href="https://www.linkedin.com/in/chetan-chaudhari-97740021b/" isExternal>
              <FontAwesomeIcon icon={faHashtag} />
            </Link>
          </Tooltip>
        </ListItem>

        {/* Phone */}
        <ListItem>
          <Tooltip label="7972994748" aria-label="Phone">
            <Link href="tel:+917972994748">
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </Tooltip>
        </ListItem>
      </UnorderedList>
    </div>
  )
}

export default socialMedia